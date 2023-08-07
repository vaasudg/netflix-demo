import './Error.css'

const ErrorBountary = ({ error }: any) => {
  return (
    <div className='error__content'>
      <h1>Error</h1>
      {error} - Please try again later
    </div>
  )
}

export default ErrorBountary
