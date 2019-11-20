const admin = require("firebase-admin");
//  acessing Cloud Firestore using the admin SDK locally
let serviceAccount = require("../node-firebase-7d509-firebase-adminsdk-r1kes-b41e6d7d24.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://node-firebase-7d509.firebaseio.com"
});

// creates a firestore instance
const db = admin.firestore();

// create new user
const create_user = async (req, res) => {
  try {
    await db
      .collection("users")
      .doc("/" + req.body.id + "/")
      .create({
        email: req.body.email,
        first_name: req.body.first_name,
        second_name: req.body.second_name
      });
    return res.status(200).send("user successfully  created");
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error });
  }
};

// get a user
const get_user = async (req, res) => {
  try {
    const userDocument = db.collection("users").doc(req.params.id);
    let user = await userDocument.get();
    let response = user.data();
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// delete a particular user
const delete_user = async (req, res) => {
  try {
    const userDocument = db.collection("users").doc(req.params.id);
    await userDocument.delete();
    return res.status(200).send("user successfully  deleted");
  } catch (error) {
    return res.status(500).send(error);
  }
};
// update user
const update_user = (req, res) => {
  const userDocument = db.collection("users").doc(req.params.id);
  return userDocument
    .update({
      email: req.body.email,
      first_name: req.body.first_name,
      second_name: req.body.second_name
    })
    .then(() => {
      return res.status(200).send("user successfully updated");
    })
    .catch(() => {
      return res.status(500).send(error);
    });
};

// all users
const get_all_user = (req, res) => {
  let users = db.collection("users");
  let response = [];
  return users
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const selectedItem = {
          id: doc.id,
          data: doc.data()
        };

        response.push(selectedItem);
      });
      return res.status(200).send(response);
    })
    .catch(() => {
      return res.status(500).send(error);
    });
};

module.exports = {
  create_user,
  get_user,
  delete_user,
  update_user,
  get_all_user
};
