import Header from './Header';

export default function ServiceList() {
    return (
        <div className="relative min-h-screen overflow-x-hidden bg-green-100">
            
            <Header  isOverlay={false}/>

            <div className=" flex flex-col items-center justify-center text-center text-black">
                <h2 className="text-xl md:text-4xl font-bold pt-2 underline">Nuestros Servicios: </h2>

                <h3 className="text-xl md:text-4xl font-bold pt-2">SERVICIOS DE MECÁNICA GENERAL</h3>
                
                 <ul className="mt-4 text-lg md:text-xl list-disc list-inside text-left">
                    <li>Auxilio Mecánico 24/7</li>
                    <li>Reparación de vehículos en ruta</li>
                    <li>Servicio de grúa</li>
                    <li>Reparación de vehículos diésel</li>
                    <li>Reparación de vehículos a gasolina</li>
                </ul>


                <p className="mt-4 text-lg md:text-xl">
                    Ofrecemos servicios mecánicos para agendar y facilitar contacto directo a través de WhatsApp o teléfono.</p>

            </div>


                       
        </div>
    )
}