// @types/react-splide.d.ts
declare module '@splidejs/react-splide' {
  import { ComponentType } from 'react'

  export interface SplideProps {
    // Defina as propriedades esperadas para o Splide aqui
    options?: object
    [key: string]: unknown
  }

  export interface SplideSlideProps {
    // Defina as propriedades esperadas para o SplideSlide aqui
    [key: string]: unknown
  }

  export const Splide: ComponentType<SplideProps>
  export const SplideSlide: ComponentType<SplideSlideProps>
}
