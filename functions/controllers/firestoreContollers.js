const admin = require("firebase-admin");
//  acessing Cloud Firestore using the admin SDK locally
let serviceAccount = require("../node-firebase-7d509-firebase-adminsdk-r1kes-b41e6d7d24.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://node-firebase-7d509.firebaseio.com"
});

// creates a firestore instance
const db = admin.firestore();

/**
 *
 * @param {*} req
 * @param {*} res
 * @function creates a new user
 */
const create_user = (req, res) => {
  let users = db.collection("users");
  return users
    .doc("/" + req.body.id + "/")
    .create({
      email: req.body.email,
      first_name: req.body.first_name,
      second_name: req.body.second_name
    })
    .then(() => {
      return res.status(201).json({ response: "user successfully created" });
    })
    .catch(error => {
      return res.status(500).json({ error: error });
    });
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @function gets user
 */
const get_user = async (req, res) => {
  const userDocument = db.collection("users").doc(req.params.id);
  return userDocument
    .get()
    .then(doc => {
      let response = doc.data();
      return res.status(200).json({ response: response });
    })
    .catch(error => {
      return res.status(500).json({ error: error });
    });
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @function deletes users
 */
const delete_user = async (req, res) => {
  const userDocument = db.collection("users").doc(req.params.id);
  return userDocument
    .delete()
    .then(() => {
      return res.status(204);
    })
    .catch(error => {
      return res.status(500).json({ error: error });
    });
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @function updates user data
 */
const update_user = (req, res) => {
  const userDocument = db.collection("users").doc(req.params.id);
  return userDocument
    .update({
      email: req.body.email,
      first_name: req.body.first_name,
      second_name: req.body.second_name
    })
    .then(() => {
      return res
        .status(200)
        .json({ response: "user data successfully updated" });
    })
    .catch(() => {
      return res.status(500).json({ error: error });
    });
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @function gets all users
 */
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
      return res.status(200).json({ response: response });
    })
    .catch(() => {
      return res.status(500).json({ error: error });
    });
};

module.exports = {
  create_user,
  get_user,
  delete_user,
  update_user,
  get_all_user
};
