export default useEscapeKey = (updateOn, func) => {
    React.useEffect(() => {

        const handleEscapeDown = (e) => {
          if (e.code === 'Escape') {
            func()
          }
        }
    
        document.addEventListener('keydown', handleEscapeDown)
    
        return () => {
          document.removeEventListener('keydown', handleEscapeDown)
        }
      }, [updateOn])
}