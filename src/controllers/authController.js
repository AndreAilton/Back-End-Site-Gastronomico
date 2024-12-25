import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// Registrar Usuario
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
      // Verifica se o usuário já existe
      let user = await User.findOne({ email });
      if (user) return res.status(400).json({ msg: 'Usuário já existe' });
  
      // Cria novo usuário
      user = new User({ name, email, password });
  
      // Hash da senha
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
  
      await user.save();
      res.status(200).json({ msg: 'Usuário criado com sucesso' });
  
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Erro no servidor');
    }
  }

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verifica se o usuário existe
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Email não Cadastrado' });

    // Verifica a senha
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Credenciais inválidas' });

    // Gera Token JWT
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' })

    res.status(200).json({auth: true, token, user: { id: user._id, name: user.name, email: user.email } });


  } catch (err) {
    console.error(err.message);
    res.status(500).send('Usuario ou Senhas Incorretos');
  }
}