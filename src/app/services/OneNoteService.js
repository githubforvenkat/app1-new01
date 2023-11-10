import axios from 'axios';

const OneNoteService = {
  async importNotebook(notebookId) {
    const response = await axios.post('http://localhost:3000/onenote/import/' + notebookId);
    return response.data;
  },
};

export default OneNoteService;

