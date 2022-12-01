import React from "react";

const Baners = () => {
    return (
        <div className="container px-4">
            <div className="row  gx-5">
                <div className="col-md-6 text-center shadow  p-3 mb-5 bg-body rounded ">

                    <p> <img src="/imagenes/modelos.jpg" alt=" modelo" className="img-fluid" width="300" height="300"/></p>
                    <p>Un lugar de encuentro para los atletas
                        Nunca es fácil probar algo nuevo. Pero es excelente.
                        Porque no importa cuántas veces te caigas, siempre
                        ganas algo. Probar cosas nuevas siempre es una victoria.</p>
                    <p> <button className="btn btn-warning">
                        Ver Mas  </button></p>


                </div>
                <div className="col-md-6 text-center shadow   p-3 mb-5 bg-body rounded">
                    <p> <img src="/imagenes/modelos 2.jpg" alt=" modelo" className="img-fluid" width="300" height="300" /></p>
                    <p>Únete a la comunidad de Fue-Fort. Como miembro,
                        tendrás acceso a la inspiración, a los últimos productos de Fue-Fort y a
                        una comunidad de personas que están probando algo nuevo, como tú.</p>
                    <p> <button className="btn btn-warning">
                        Unete </button></p>

                </div>
            </div>
        </div>
    );
}

export default Baners;