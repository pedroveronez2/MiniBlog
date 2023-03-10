import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext.js';

function CreatePost() {
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');
  const navigate = useNavigate();
  const { user } = useAuthValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica para enviar o formulário ao servidor
    navigate('/'); // redirecionar para a página inicial após o envio
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Criar Post</h1>
      <p className="text-center mb-4">Escreva sobre o que quiser e compartilhe o seu post</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Titulo:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control"
            placeholder="Pense em um título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            URL da Imagem:
          </label>
          <input
            type="text"
            name="image"
            id="image"
            className="form-control"
            placeholder="Insira a imagem"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Conteúdo:
          </label>
          <textarea
            name="body"
            id="body"
            className="form-control"
            placeholder="Insira o conteúdo"
            onChange={(e) => setBody(e.target.value)}
            value={body}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags:
          </label>
          <input
            type="text"
            name="tags"
            id="tags"
            className="form-control"
            placeholder="Insira as tags"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
            required
          />
        </div>
        <div className="d-flex justify-content-center m-2">
          <button type="submit" className="btn btn-primary">
            Criar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
