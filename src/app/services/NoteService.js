import axios from 'axios';

const NoteService = {
  async createNote(note) {
    const response = await axios.post('http://localhost:3000/notes', note);
    return response.data;
  },

  async readNote(id) {
    const response = await axios.get('http://localhost:3000/notes/' + id);
    return response.data;
  },

  async updateNote(note) {
    const response = await axios.put('http://localhost:3000/notes/' + note.id, note);
    return response.data;
  },

  async deleteNote(id) {
    const response = await axios.delete('http://localhost:3000/notes/' + id);
    return response.data;
  },
};

export default NoteService;
