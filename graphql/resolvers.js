const UserModel = require("./../models/User.model");

module.exports = {
  Query: {
    async getUsers() {
      return await UserModel.find();
    },
  },
  Mutation: {
    async createUser(_, { newUser }) {
      const user = new UserModel(newUser);
      await user.save();
      return;
    },
    async editUser(_, { newUserValues }) {
      const { id, name, age } = newUserValues;
      await UserModel.findByIdAndUpdate(id, { name, age });
      return;
    },
    async deleteUser(_, { id }) {
      await UserModel.findByIdAndDelete(id);
      return;
    },
  },
};
