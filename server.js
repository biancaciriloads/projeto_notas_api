const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;
const FILE = 'data.json';

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Função para ler o arquivo de notas
function readNotes() {
  try {
    const data = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Função para salvar no arquivo de notas
function saveNotes(notes) {
  fs.writeFileSync(FILE, JSON.stringify(notes, null, 2));
}

// GET: Listar todas as notas
app.get('/api/notes', (req, res) => {
  const notes = readNotes();
  res.json(notes);
});

// POST: Criar uma nova nota
app.post('/api/notes', (req, res) => {
  const notes = readNotes();
  const novaNota = {
    id: Date.now().toString(),
    titulo: req.body.titulo,
    texto: req.body.texto,
    criadoEm: new Date().toISOString()
  };
  notes.push(novaNota);
  saveNotes(notes);
  res.json(novaNota);
});

// PUT: Atualizar uma nota existente
app.put('/api/notes/:id', (req, res) => {
  const notes = readNotes();
  const index = notes.findIndex(n => n.id === req.params.id);
  
  if (index >= 0) {
    notes[index].titulo = req.body.titulo || notes[index].titulo;
    notes[index].texto = req.body.texto || notes[index].texto;
    saveNotes(notes);
    res.json(notes[index]);
  } else {
    res.status(404).json({ erro: 'Nota não encontrada' });
  }
});

// DELETE: Excluir uma nota
app.delete('/api/notes/:id', (req, res) => {
  const notes = readNotes();
  const novasNotas = notes.filter(n => n.id !== req.params.id);
  saveNotes(novasNotas);
  res.json({ mensagem: 'Nota removida com sucesso' });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});