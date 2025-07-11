# Luna Petshop

Luna Petshop é uma landing page moderna desenvolvida com [React](https://react.dev/), [Vite](https://vitejs.dev/) e [Tailwind CSS](https://tailwindcss.com/). O objetivo é apresentar os serviços de um petshop de forma atrativa, responsiva e profissional, facilitando o contato do cliente e mostrando o trabalho da empresa.

## ✨ Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/) (padronização de código)



Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## 🛠 Scripts disponíveis

- `npm run dev` — Inicia o servidor de desenvolvimento
- `npm run build` — Gera a versão de produção
- `npm run preview` — Visualiza a build de produção localmente
- `npm run lint` — Executa o linter

## 📁 Estrutura de Pastas

```
src/
  App.jsx
  Hero.jsx
  main.jsx
  index.css
  assets/
    logo.png
    cachorro1.png
    Hero.jpeg
    pata1.png
    pata2.png
    pata3.png
    pata4.png
public/
  logo.png
  vite.svg
```

## 📷 Imagens

As imagens utilizadas estão na pasta `src/assets`.

## 🖼️ Favicon

O favicon do site foi personalizado para exibir o logo do Luna Petshop. O arquivo `logo.png` foi adicionado e referenciado na tag `<link rel="icon" ...>` do `index.html`.

## 🎨 Logo Redondo

Para exibir o logo de forma arredondada na página, foi utilizada a tag `<img>` com a classe CSS:

```css
.logo-redonda {
  border-radius: 50%;
}
```

Exemplo de uso no HTML:

```html
<img src="/logo.png" alt="Logo Luna Petshop" class="logo-redonda" width="120" height="120" />
```



Feito com 💙