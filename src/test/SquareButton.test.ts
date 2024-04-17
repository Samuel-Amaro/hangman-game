import {cleanup, render, screen} from '@testing-library/svelte'
import {afterEach, describe, expect, test} from 'vitest'
import '@testing-library/jest-dom/vitest'
import SquareButton from '$lib/SquareButton.svelte'

describe('SquareButton.svelte', () => {
  afterEach(() => cleanup())

  test('renderiza SquareButton componente corretamente', () => {
    render(SquareButton, {props: {props: {title: "titulo", href: "#"}, text: "texto"}})

    expect(screen.queryByText('texto')).toBeInTheDocument()
  })
})

