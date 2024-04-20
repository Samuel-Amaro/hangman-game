import { afterEach, describe, expect, test, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/svelte';
import KeyboardLetter from '$lib/KeyboardLetter.svelte';

describe('KeyboardLetter.svelte', () => {
  afterEach(() => cleanup());
  
  test('Renderiza componente KeyboardLetter corretamente', () => {
    render(KeyboardLetter, {letter: 'T'})

    expect(screen.getByText('T')).toBeInTheDocument()
  })

  test('KeyboardLetter com evento click', () => {
    const onClick = vi.fn();

    const {component} = render(KeyboardLetter, {letter: 'T'})

    expect(screen.getByText('T')).toBeInTheDocument()

    component.$on('click', onClick)
    
    fireEvent.click(screen.getByText('T'))

    expect(onClick).toHaveBeenCalledOnce();
  })

  test('KeyboardLetter com evento keydown', () => {
    const onKeydown = vi.fn();

    const {component} = render(KeyboardLetter, {letter: 'T'})

    expect(screen.getByText('T')).toBeInTheDocument()

    component.$on('keydown', onKeydown)
    
    fireEvent.keyDown(screen.getByText('T'), { key: 'Enter' });

    expect(onKeydown).toHaveBeenCalledOnce();
  })

  test('estilo desabilitado', () => {
    render(KeyboardLetter, {letter: 'T', disabled: true})

    expect(screen.getByText('T')).toBeInTheDocument()

    expect(screen.getByText('T')).toHaveClass('disabled')
  })
})