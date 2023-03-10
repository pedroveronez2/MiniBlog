import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useInsertDocument } from '../../hook/useInsertDocument';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');
  const [formError, setFormError] = useState('');
  const { user } = useAuthValue();
  const { insertDocument, response } = useInsertDocument('posts');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      new URL(image);
    } catch (error) {
      setFormError('A "IMAGEM" precisa ser uma URL.');
      return;
    }

    const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase());

    if (!title || !image || !tags || !body) {
      setFormError('Atenção: Preencha todos os campos.');
      return;
    }

    insertDocument({
      title,
      image,
      tags: tagsArray,
      body,
      uid: user.uid,
      createBy: user.displayName,
    });
    navigate('/');
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
            placeholder="Insira as tags separadas por vírgulas"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
            required
          />
        </div>
        <div className="d-flex justify-content-center m-2">
          {!response.loading && <button className="btn btn-primary">Criar</button>}
        </div>
        {response.error && <p>{response.error}</p>}
        </form>
      {formError && <p className="text-danger">{formError}</p>}
    </div>
  );
}
export default CreatePost;