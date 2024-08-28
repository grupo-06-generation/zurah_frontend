import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { LinkedinIcon } from "lucide-react";

export default function Component() {
  return (
    <div className="bg-white text-black p-8">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4 bg-green-300 text-green-600">
          Time
        </Badge>
        <h1 className="text-4xl font-bold mb-4">A equipe que se compromete com você</h1>
        <p className="text-lg text-muted-foreground">
          Na Zurah, nossa equipe é o coração pulsante da inovação e excelência. Com uma combinação única de paixão, expertise e dedicação, trabalhamos juntos para transformar desafios em oportunidades e levar nossas soluções ao próximo nível.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="text-center">
          <Avatar className="mx-auto mb-4 w-16 h-16 sm:w-24 sm:h-24">
            <AvatarImage src="https://media.licdn.com/dms/image/v2/D4D03AQE64swpMfznxg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690411810275?e=1730332800&v=beta&t=-2j9qGNyndTEy8xjnQCKHUMwoKmFcmX9A8hmqap1gys" alt="Marilia Rodrigues"/>
            <AvatarFallback>MR</AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-bold">Marilia Rodrigues</h3>
          <p className="text-green-500">Developer</p>
          <p className="text-muted-foreground">"Na Zurah, cada linha de código é um passo para o futuro."</p>
          <div className="flex justify-center space-x-2 mt-4">
            <a href="https://www.linkedin.com/in/mariliamarquesrodrigues/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="text-center">
          <Avatar className="mx-auto mb-4 w-16 h-16 sm:w-24 sm:h-24">
            <AvatarImage src="https://media.licdn.com/dms/image/v2/D4E03AQHldzAzd0uT6w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1716419804235?e=1730332800&v=beta&t=PQK67uYopFtrLWwVSZq8I_M4XyOBnbAvR_yRNZ2sXRU" alt="Elen Benitez" />
            <AvatarFallback>EB</AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-bold">Bella Espósito</h3>
          <p className="text-green-500">Developer</p>
          <p className="text-muted-foreground">"Desenvolver na Zurah é transformar desafios em oportunidades."</p>
          <div className="flex justify-center space-x-2 mt-4">
            <a href="https://www.linkedin.com/in/bella-esposito-rei/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="text-center">
          <Avatar className="mx-auto mb-4 w-16 h-16 sm:w-24 sm:h-24">
            <AvatarImage src="https://media.licdn.com/dms/image/v2/D4D03AQGtBadx5qPdiA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718217706332?e=1730332800&v=beta&t=K9aERIXb1pYz7sYQUT5HeH4D779DhPJzZ-WHfrhUlbo" alt="Kacy Wade" />
            <AvatarFallback>KW</AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-bold">Wallacy Menezes</h3>
          <p className="text-green-500">Developer</p>
          <p className="text-muted-foreground">"Na Zurah, cada bug é uma chance para aprender e evoluir."</p>
          <div className="flex justify-center space-x-2 mt-4">
            <a href="https://www.linkedin.com/in/wallacy-menezes/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="text-center">
          <Avatar className="mx-auto mb-4 w-16 h-16 sm:w-24 sm:h-24">
            <AvatarImage src="https://media.licdn.com/dms/image/v2/D4D03AQEWzqqu7yQ4Xw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720638188649?e=1730332800&v=beta&t=EWHyTH8D9tW5CpOgCMLvVl_gBNJ4gKCSvcmpTPQX2Ss" alt="Alya Levine" />
            <AvatarFallback>AL</AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-bold">Fernanda Shinoda</h3>
          <p className="text-green-500">Developer</p>
          <p className="text-muted-foreground">"Inovamos com paixão, cada código é um passo à frente."</p>
          <div className="flex justify-center space-x-2 mt-4">
            <a href="https://www.linkedin.com/in/fernanda-shinoda/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="text-center">
          <Avatar className="mx-auto mb-4 w-16 h-16 sm:w-24 sm:h-24">
            <AvatarImage src="https://media.licdn.com/dms/image/v2/D4D03AQHFIZ35LpkKxg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718237251490?e=1730332800&v=beta&t=oycAT5EuDSZBkbSmUdvjZBcnMRpCg9qjcYS-SSaXHy4" alt="Rosemary Hernandez" />
            <AvatarFallback>RH</AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-bold">Júlia Almeida</h3>
          <p className="text-green-500">Developer</p>
          <p className="text-muted-foreground">"Na Zurah, transformamos ideias em soluções digitais impactantes."</p>
          <div className="flex justify-center space-x-2 mt-4">
            <a href="https://www.linkedin.com/in/juyoonp/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="text-center">
          <Avatar className="mx-auto mb-4 w-16 h-16 sm:w-24 sm:h-24">
            <AvatarImage src="https://media.licdn.com/dms/image/v2/D4D03AQE90ojFFjmQNA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722556905758?e=1730332800&v=beta&t=a-QCpigBjWjp8c2lKNJBjqNFtJ0CffzlTMY6L_bXxYc" alt="Theo Morales" />
            <AvatarFallback>TM</AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-bold">Michel Gonçalves</h3>
          <p className="text-green-500">Developer</p>
          <p className="text-muted-foreground">"Cada desafio na Zurah é uma chance de redefinir o sucesso."</p>
          <div className="flex justify-center space-x-2 mt-4">
            <a href="https://www.linkedin.com/in/michelgoncalvess/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="text-center">
          <Avatar className="mx-auto mb-4 w-16 h-16 sm:w-24 sm:h-24">
            <AvatarImage src="https://media.licdn.com/dms/image/v2/D4D03AQGdWPHpj-BOIw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724602645714?e=1730332800&v=beta&t=wKlDHm8dEZXiVF1BztJ5AJbtc0U_LvnyZ8AQ6y2ZaI4" alt="Ishmael Dunlop" />
            <AvatarFallback>ID</AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-bold">Israel Oliveira</h3>
          <p className="text-green-500">Developer</p>
          <p className="text-muted-foreground">"A Zurah é onde a tecnologia e a colaboração criam inovação."</p>
          <div className="flex justify-center space-x-2 mt-4">
            <a href="https://www.linkedin.com/in/israeloliveiradev/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
