const asyncHandler = require("express-async-handler");
const Boot = require("../../Models/bootModel");

// @desc Get boots
// @route GET api/boots
// @acess Public
const getBoots = asyncHandler(async (req, res) => {
  const boots = await Boot.find();
  res.status(200).json(boots);
});

// @desc Post boots
// @route POST api/boot
// @acess Public
const postBoot = asyncHandler(async (req, res) => {
  const boot = await Boot.create({
    title: req.body.title,
    price: req.body.price,
    type: req.body.type,
    image: {
      data: req.file.filename,
      contentType: "image/png",
    },
  });
  boot.save();
  res.status(200).json(boot);
});

// @desc Put boots
// @route PUT api/boot/:id
// @acess Private
const putBoot = asyncHandler(async (req, res) => {
  const desiredBoot = await Boot.findById(req.params.id);
  if (!desiredBoot) {
    res.status(400);
    throw new Error("This boot does not exist!");
  }
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User does not exist!");
  }

  if (desiredBoot.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  const updatedBoot = await Boot.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedBoot);
});

// @desc Delete boots
// @route DELETE api/boot/:id
// @acess Private
const deleteBoot = asyncHandler(async (req, res) => {
  const neededBoot = await Boot.findById(req.params.id);
  if (!neededBoot) {
    res.status(400);
    throw new Error("This boot doesn't exist!");
  }

  const user = User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User does not exist!");
  }

  if (desiredBoot.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await neededBoot.remove();
});

module.exports = { getBoots, postBoot, putBoot, deleteBoot };
