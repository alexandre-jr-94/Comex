function Importacao() {
  return (
    <section className="importacao">
      <h3 className="titulo-importacao">
        Tipos de Importações via <span className="quinaria">Trading</span>
      </h3>
      <div className="tipo-importacao">
        <div className="padding">
          <h4>
            Importação por
            <span className="bold sublinhado"> conta e ordem </span>
          </h4>
          <p>
            A importação por conta e ordem de terceiro é um serviço prestado por
            uma empresa - a importadora - a qual promove, em seu nome, o
            Despacho Aduaneiro de Importação de mercadorias adquiridas por outra
            empresa ou pessoa física - a adquirente - em razão de contrato
            previamente firmado, que pode compreender ainda a prestação de
            outros serviços relacionados com a transação comercial, como a
            realização de cotação de preços e a intermediação comercial
          </p>
        </div>
        <div className="padding">
          <h4>
            Importação por <span className="bold sublinhado">encomenda</span>
          </h4>
          <p>
            A importação por encomenda é aquela em que a pessoa jurídica
            importadora é contratada para promover, em seu nome e com recursos
            próprios, o despacho aduaneiro de importação de mercadoria
            estrangeira por ela adquirida no exterior para revenda a
            encomendante predeterminado
          </p>
        </div>
      </div>
      {/* SVG de ondas */}
      <div className="onda"></div>
    </section>
  );
}
export default Importacao;
