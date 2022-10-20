import "./Invoice.css";

function InvoiceEx() {
  return (
    <section className="table">
      <section className="paper">
        <nav>
          <div className="exportador">
            <p id="ExpoInfo">
              <span className="expo"> Four-Union Management Co.,Ltd </span>
              <br /> Fort Tower, 77 Swatow St <br /> Wan Chai, Hong Kong
            </p>
          </div>
          <div className="InvoiceNum">
            <p>
              No:CI2055 <br /> Date: 20/10/2022
            </p>
          </div>
        </nav>
        <h1>Commercial Invoice</h1>
        <p>
          <span className="Negrito">Consignee:</span> Abelhas Importadora e
          Exportadora EIRELI
          <br />
          Address: Rua da tilápia, 896, sala 80, Centro, Florianópolis - SC -
          CEP:99999-999
          <br />
          CNPJ: 00.111.222-3333-44
        </p>
        <p>
          <span className="Negrito">Notify/Buyer:</span> Metaleiros Metais e
          acessórios LTDA.
          <br />
          Address: Rua da Gaivota Vermelha, 156, sala 1, Trindade, Florianópolis
          - SC - CEP:88888-88
          <br />
          CNPJ: 55.666.777-8888-99
        </p>
        <h3>commodity:</h3>
        <table>
          <tr>
            <th>Description</th>
            <th>Units</th>
            <th>Unit Price</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>CONTROL ROOT CONTAINER NCM: 3926.90.90</td>
            <td>25000</td>
            <td>0,21</td>
            <td>5250</td>
          </tr>
        </table>
        <p className="total">
          <span className="Negrito">Incoterm:</span> FOB - Total Amount: USD
          5250,00
        </p>

        <div className="info2">
          <p>
            <span className="Negrito">Exporter:</span> <br /> Four-Union
            Management Co.,Ltd
          </p>
          <p>
            <span className="Negrito">manufacturer:</span> <br /> Xianyou Lán yā
            Industry Ltd
          </p>
          <p>
            <span className="Negrito">Country of Origin:</span> China
          </p>
          <p>
            <span className="Negrito">Country of Acquisition:</span> China
          </p>
          <p>
            <span className="Negrito">Country of Provenance:</span> China
          </p>
          <div className="Pagamento">
            <p>
              Terms and Conditions: Proceed this order TT payment and notify the
              seller by email with bank transaction statement attached for
              shipment arrangement.
            </p>
            <p>
              <span className="Negrito">Payment:</span> TT Advance
              <span className="Negrito">Bank Name:</span> New Blue World Bank.
              Address: No2, JengSung Rd Hong Kong. <br />
              <span className="Negrito">Account Nº:</span> 7958748587
              <span className="Negrito">Swift Code:</span> NBWHKAA
            </p>
          </div>
          <div className="Nome">John Bell</div>
          <div>
            <p className="carimbo">
              <span className="CarimboText">For and on behalf of</span> <br />
              Four-Union Management Co.,Ltd
            </p>
          </div>
          <p className="ass">Authorized Signature</p>
        </div>
      </section>
    </section>
  );
}

export default InvoiceEx;
