import { render, fireEvent } from '@testing-library/react';
import Post from './Post';

test('adiciona dois comentários', () => {
  const { getByTestId } = render(<Post imageUrl="example.com/image.png">Meu post</Post>);
  
  const commentForm = getByTestId('comment-form');
  const commentInput = getByTestId('comment-input');

  fireEvent.change(commentInput, { target: { value: 'Comentário 1' } });
  fireEvent.submit(commentForm);

  fireEvent.change(commentInput, { target: { value: 'Comentário 2' } });
  fireEvent.submit(commentForm);

  const comments = getByTestId('comments');
  expect(comments.children.length).toBe(2);
});