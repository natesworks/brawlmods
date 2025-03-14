import { AlertCircle, AlertTriangle, Info, X } from 'lucide-react'
import { useState } from 'react'

type AnnouncementType = 'information' | 'warning' | 'error'

interface BannerProps {
  type: AnnouncementType
  message: string
}

const bannerStyles: Record<AnnouncementType, string> = {
  information: 'bg-blue-500 text-white',
  warning: 'bg-yellow-500 text-white',
  error: 'bg-red-500 text-white',
}

const bannerIcons: Record<AnnouncementType, React.ReactNode> = {
  information: <Info className="h-5 w-5" />,
  warning: <AlertTriangle className="h-5 w-5" />,
  error: <AlertCircle className="h-5 w-5" />,
}

export default function Banner({ type, message }: BannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className={`${bannerStyles[type]} py-2 px-4`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span>{bannerIcons[type]}</span>
          <p className="font-medium">{message}</p>
        </div>
        <button onClick={() => setIsVisible(false)} className="text-white hover:text-gray-200">
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}


