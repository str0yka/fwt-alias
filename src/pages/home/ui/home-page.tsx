import { Button, TextArea } from '@shared/ui';

export const HomePage = () => (
  <>
    <Button variant='contained'>Создать игру</Button>
    <Button variant='outlined'>Создать игру</Button>
    <TextArea placeholder='Ваши слова через enter' />
    <TextArea defaultValue={'дерево машина вода инструмент слово'} />
    <TextArea
      error
      placeholder='Ваши слова через enter'
    />
    <TextArea
      error
      defaultValue={'дерево машина вода инструмент слово'}
    />
  </>
);
