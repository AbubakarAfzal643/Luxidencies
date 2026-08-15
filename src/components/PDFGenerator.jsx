import { FileDown } from 'lucide-react'
import Button from './Button'

function PDFGenerator({ onGenerate }) {
  return (
    <Button variant="accent" onClick={onGenerate}>
      <FileDown className="mr-2 h-4 w-4" /> Download Booking Plan PDF
    </Button>
  )
}

export default PDFGenerator
