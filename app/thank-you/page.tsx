import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Thank You!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600">
            Your form has been successfully submitted. We appreciate your input!
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/">
            <Button variant="outline">Return to Home</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

