import {cleanup, fireEvent, render, screen} from '@testing-library/svelte'
import {afterEach, describe, expect, test, vi} from 'vitest'
import userEvent from '@testing-library/user-event'
import Button from '$lib/Button.svelte'
import '@testing-library/jest-dom/vitest'

describe('Button.svelte', () => {
  afterEach(() => cleanup())

  test('renderiza Button componente corretamente', () => {
    render(Button, {text: 'Clique Aqui!'})

    expect(screen.queryByText('Clique Aqui!')).toBeInTheDocument() 
  })

  test('Button componente com event click', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    const {component} = render(Button, {text: "Clique Aqui!"})
    component.$on('click', onClick)

    const button = screen.getByText('Clique Aqui!')
    await user.click(button)

    expect(onClick).toHaveBeenCalledOnce()
  })

  test('Button componente com event keydown', async () => { 
    const onKeydown = vi.fn()

    const {component} = render(Button, {text: "Aqui!"})
    component.$on('keydown', onKeydown)

    const button = screen.getByText('Aqui!')
    fireEvent.keyDown(button, {key: 'Enter'})

    expect(onKeydown).toHaveBeenCalledOnce()
  })

  test('Button com estilo secundario', () => {
    render(Button, {text: "Aqui!", secondary: true})
    const button = screen.getByText('Aqui!')
    expect(button).toHaveClass('secondary')
  })
})

