import {
  AlertMessage,
  ContactButton,
  ContactContainer,
  FormContainer,
} from './style'

import { ReactElement, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import emailjs from '@emailjs/browser'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Tooltip, tooltipClasses } from '@mui/material'
import { styled } from '@mui/material/styles'

import { FaDownload, FaGithub, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { CiLinkedin } from 'react-icons/ci'
import { FaPhone, FaArrowsRotate } from 'react-icons/fa6'
import { PiYoutubeLogoLight } from 'react-icons/pi'
import { BsQrCode } from 'react-icons/bs'

import { defaultTheme } from '../../styles/themes/defaultTheme'

interface CustomTooltipProps {
  className?: string
  title: React.ReactNode
  arrow?: boolean
  children: ReactElement
}

const CustomTooltip = styled(({ className, ...props }: CustomTooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: defaultTheme['child-container'],
    color: defaultTheme['toolTip-color'],
    fontSize: theme.typography.pxToRem(20),
    fontFamily: 'Archivo',
    border: `2px solid ${defaultTheme['blue-object']}`,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: defaultTheme['blue-object'],
  },
}))

const messageFormValidationSchema = zod.object({
  name: zod.string().min(3, 'Digite seu nome'),
  email: zod.string().email('Digite um e-mail válido'),
  subject: zod.string().min(3, 'Digite o assunto'),
  message: zod
    .string()
    .min(3, 'Digite uma mensagem')
    .max(
      400,
      'Por favor, revise sua mensagem. O limite máximo é de 400 caracteres.',
    ),
})

type ObjectMessageFormProps = zod.infer<typeof messageFormValidationSchema>

export function Contact() {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(messageFormValidationSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const [loading, setLoading] = useState<boolean>(false)
  const [messageAlert, setMessageAlert] = useState<string>('')
  const [colorMessage, setColorMessage] = useState<boolean>(false)

  const handleCreateMessageForm = async (data: ObjectMessageFormProps) => {
    const serviceID = import.meta.env.VITE_SERVICE_ID
    const templateId = import.meta.env.VITE_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_PUBLIC_KEY

    setLoading(true)

    const templateParams = {
      from_name: data.name,
      message: data.message,
      subject: data.subject,
      email: data.email,
    }

    try {
      await emailjs.send(serviceID, templateId, templateParams, publicKey)

      setMessageAlert('Mensagem enviada com sucesso!')
      setColorMessage(false)
      setLoading(false)

      reset()
    } catch (error) {
      setMessageAlert('Erro ao enviar mensagem')
      setColorMessage(true)
      setLoading(false)
    }
  }

  return (
    <ContactContainer>
      <h2>
        Contato <span>.</span>
      </h2>

      <h3>Vamos lá?</h3>

      <div>
        <p>
          Preencha o formulário abaixo para esclarecemos suas dúvidas e dar
          início ao seu projeto!
        </p>

        <form action="" onSubmit={handleSubmit(handleCreateMessageForm)}>
          <FormContainer>
            {formState.errors.name && (
              <span className="error">{formState.errors.name.message}</span>
            )}
            <input
              title="Digite seu nome"
              id="name"
              type="text"
              placeholder="Nome *"
              {...register('name')}
            />

            {formState.errors.email && (
              <span className="error">{formState.errors.email.message}</span>
            )}
            <input
              title="Digite um e-mail válido"
              id="email"
              type="text"
              placeholder="Email *"
              {...register('email')}
            />

            {formState.errors.subject && (
              <span className="error">{formState.errors.subject.message}</span>
            )}
            <input
              title="Digite o assunto"
              id="subject"
              type="text"
              placeholder="Assunto *"
              {...register('subject')}
            />

            {formState.errors.message && (
              <span className="error">{formState.errors.message.message}</span>
            )}
            <textarea
              title="Digite uma mensagem"
              id="message"
              placeholder="Mensagem *"
              {...register('message')}
            ></textarea>

            <button type="submit" title="Enviar Mensagem">
              {loading ? (
                <span className="loading-button">
                  <FaArrowsRotate />
                </span>
              ) : (
                'ENVIAR'
              )}
            </button>
          </FormContainer>
        </form>
        <AlertMessage $color={colorMessage}>
          {messageAlert ? (
            <span className="alert-send-message">{messageAlert}</span>
          ) : (
            ''
          )}
        </AlertMessage>
      </div>

      <div>
        <NavLink to="/curriculoAlexLimaFrontEndDeveloper.pdf" target="_blank">
          <CustomTooltip title="Download Currículo" arrow>
            <ContactButton>
              <FaDownload />
            </ContactButton>
          </CustomTooltip>
        </NavLink>

        <NavLink to="/businessCard.png" target="_blank">
          <CustomTooltip title="Download Cartão de Visita" arrow>
            <ContactButton>
              <BsQrCode />
            </ContactButton>
          </CustomTooltip>
        </NavLink>

        <NavLink to="mailto: alex.lima_dev@outlook.com" target="_blank">
          <CustomTooltip title="Envie um e-mail" arrow>
            <ContactButton>
              <MdEmail />
            </ContactButton>
          </CustomTooltip>
        </NavLink>

        <NavLink to="https://wa.me/5511947330282" target="_blank">
          <CustomTooltip title="Chamada ou WhatsApp" arrow>
            <ContactButton>
              <FaPhone />
            </ContactButton>
          </CustomTooltip>
        </NavLink>

        <NavLink to="https://www.linkedin.com/in/a1exlima/" target="_blank">
          <CustomTooltip title="Rede Social LinkedIn" arrow>
            <ContactButton>
              <CiLinkedin />
            </ContactButton>
          </CustomTooltip>
        </NavLink>

        <NavLink to="https://github.com/A1exLima/" target="_blank">
          <CustomTooltip title="Repositório GitHub" arrow>
            <ContactButton>
              <FaGithub />
            </ContactButton>
          </CustomTooltip>
        </NavLink>

        <NavLink to="https://www.youtube.com/@A1exLima" target="_blank">
          <CustomTooltip title="Canal no Youtube" arrow>
            <ContactButton>
              <PiYoutubeLogoLight />
            </ContactButton>
          </CustomTooltip>
        </NavLink>

        <NavLink to="https://www.instagram.com/a1ex.lima" target="_blank">
          <CustomTooltip title="Rede Social Instagram" arrow>
            <ContactButton>
              <FaInstagram />
            </ContactButton>
          </CustomTooltip>
        </NavLink>
      </div>
    </ContactContainer>
  )
}
