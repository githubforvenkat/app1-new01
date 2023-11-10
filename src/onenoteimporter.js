import axios from 'axios';

export async function importOneNoteNotebook(notebookId) {
  const response = await axios.post('http://localhost:3000/onenote/import/' + notebookId);
  return response.data;
}
