const {
  Users,
  questions_and_options,
  students,
  teachers,
} = require("./models");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/users", async (req, res) => {
  try {
    const { name, email, username, password } = req.body;

    const newUser = await Users.create({
      name,
      email,
      username,
      password,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.get("/users", async (req, res) => {
  try {
    const allUsers = await Users.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "password"] },
    });

    let users = allUsers
      .map((user) => user.dataValues)
      .map((user) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          username: user.username,
        };
      });

    res.status(200).json({ users, status: true });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Users.findByPk(id, {
      attributes: { exclude: ["createdAt", "updatedAt", "password"] },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, username, password } = req.body;

    const user = await Users.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.name = name;
    user.email = email;
    user.username = username;
    user.password = password;

    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Users.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await user.destroy();

    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.post("/questions", async (req, res) => {
  try {
    const { question, option1, option2, option3, option4, correct_option } =
      req.body;

    const newQuestion = await questions_and_options.create({
      question,
      option1,
      option2,
      option3,
      option4,
      correct_option,
    });

    res.status(201).json(newQuestion);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.get("/questions", async (req, res) => {
  try {
    const allQuestions = await questions_and_options.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    let questions = allQuestions
      .map((question) => question.dataValues)
      .map((question) => {
        return {
          id: question.id,
          question: question.question,
          option1: question.option1,
          option2: question.option2,
          option3: question.option3,
          option4: question.option4,
        };
      });

    res.status(200).json({ questions, status: true });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.get("/questions/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const question = await questions_and_options.findByPk(id, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    res.status(200).json(question);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.put("/questions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { question, option1, option2, option3, option4, correct_option } =
      req.body;

    const questionData = await questions_and_options.findByPk(id);

    if (!questionData) {
      return res.status(404).json({ error: "Question not found" });
    }

    questionData.question = question;
    questionData.option1 = option1;
    questionData.option2 = option2;
    questionData.option3 = option3;
    questionData.option4 = option4;
    questionData.correct_option = correct_option;

    await questionData.save();

    res.status(200).json(questionData);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.delete("/questions/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const question = await questions_and_options.findByPk(id);

    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    await question.destroy();

    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.post("/students", async (req, res) => {
  try {
    const { full_name, email, username, password, phoneNumber } = req.body;

    const newStudent = await students.create({
      full_name,
      email,
      username,
      password,
      phoneNumber,
    });

    res.status(201).json(newStudent);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.get("/students", async (req, res) => {
  try {
    const allStudents = await students.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "password", "deletedAt"],
      },
    });

    let students = allStudents
      .map((student) => student.dataValues)
      .map((student) => {
        return {
          id: student.id,
          full_name: student.full_name,
          email: student.email,
          username: student.username,
          phoneNumber: student.phoneNumber,
        };
      });

    res.status(200).json({ students, status: true });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.get("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const student = await students.findByPk(id, {
      attributes: {
        exclude: ["createdAt", "updatedAt", "password", "deletedAt"],
      },
    });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.put("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { full_name, email, username, password, phoneNumber } = req.body;

    const student = await students.findByPk(id);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    student.full_name = full_name;
    student.email = email;
    student.username = username;
    student.password = password;
    student.phoneNumber = phoneNumber;

    await student.save();

    res.status(200).json(student);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.delete("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const student = await students.findByPk(id);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    await student.destroy();

    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.post("/teachers", async (req, res) => {
  try {
    const { full_name, email, username, password, phoneNumber } = req.body;

    const newTeacher = await teachers.create({
      full_name,
      email,
      username,
      password,
      phoneNumber,
    });

    res.status(201).json(newTeacher);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.get("/teachers", async (req, res) => {
  try {
    const allTeachers = await teachers.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "password", "deletedAt"],
      },
    });

    let teachers = allTeachers
      .map((teacher) => teacher.dataValues)
      .map((teacher) => {
        return {
          id: teacher.id,
          full_name: teacher.full_name,
          email: teacher.email,
          username: teacher.username,
          phoneNumber: teacher.phoneNumber,
        };
      });

    res.status(200).json({ teachers, status: true });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.get("/teachers/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const teacher = await teachers.findByPk(id, {
      attributes: {
        exclude: ["createdAt", "updatedAt", "password", "deletedAt"],
      },
    });

    if (!teacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }

    res.status(200).json(teacher);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.put("/teachers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { full_name, email, username, password, phoneNumber } = req.body;

    const teacher = await teachers.findByPk(id);

    if (!teacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }

    teacher.full_name = full_name;
    teacher.email = email;
    teacher.username = username;
    teacher.password = password;
    teacher.phoneNumber = phoneNumber;

    await teacher.save();

    res.status(200).json(teacher);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.delete("/teachers/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const teacher = await teachers.findByPk(id);

    if (!teacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }

    await teacher.destroy();

    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
