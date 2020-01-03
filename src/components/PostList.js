import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Vanessa Romero',
          avatar: 'https://i.pravatar.cc/150?img=1'
        },
        date: '03 Jan 2020',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            date: '03 Jan 2020',
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Henrique Leonardo',
          avatar: 'https://i.pravatar.cc/150?img=8'
        },
        date: '03 Jan 2020',
        content:
          'Desafie-se. Felicidade é a nova produtividade.',
        comments: [
          {
            id: 4,
            author: {
              name: 'Lívia Alícia',
              avatar: 'https://i.pravatar.cc/150?img=25'
            },
            date: '03 Jan 2020',
            content:
              'A vida acontece de você e não pra você. Walk the f*ing talk. Never f*ing give up. Pra chegar ao next level você precisa de comprometimento e muito hardwork. Busque o next level. O segredo do sucesso é começar antes de estar pronto. Never f*ing give up. O inconformismo é o combustível da alta performance. Trabalho é aprendizado, tudo é um só, onelife. Se você não tá no jogo do longo prazo, então seu futuro é estar fora do jogo. !'
          },
          {
            id: 5,
            author: {
              name: 'Diego Marcelo',
              avatar: 'https://i.pravatar.cc/150?img=60'
            },
            date: '03 Jan 2020',
            content:
              'A vida acontece de você e não pra você. O inconformismo é o combustível da alta performance. Você tá realmente obcecado pelos seus sonhos? Ninguém lembra do médio, foque no excelente. Quebre padrões e atinja a alta performance em todas as áreas da sua vida. Viva em busca da masterização e do profissionalismo, every f*ing day. Bora pra action. Você tá realmente obcecado pelos seus sonhos? Quebre padrões e atinja a alta performance em todas as áreas da sua vida. Busque o next level.'
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;