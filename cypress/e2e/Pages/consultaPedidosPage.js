import '../../helpers/massaByEnvironment';

class ConsultaPedidosPage {
  elements = {
    closeIconContainer: () => cy.get('a[title="Fechar"]'),
    menuHamburger: () => cy.get('.navbar-toggle'),
    menuConsultaPedidos: () => cy.get('a[href="/pt-BR/pedidos/"]'),
    comboTipoConsulta: () => cy.get('select[id="tipoconsulta"]'),
    fieldIdPedidoVia: () => cy.get('input[id="idPedidovia"]'),
    fieldIdPedidoParceiro: () => cy.get('input[id="idpedidoparceiro"]'),
    fieldIdCPFCNPJ: () => cy.get('input[id="cpfcnpj"]'),
    checkBandeiraCasasBahia: () => cy.get('input[id="cbCasasBahia"]'),
    checkBandeiraPontoFrio: () => cy.get('input[id="cbPontoFrio"]'),
    checkBandeiraExtra: () => cy.get('input[id="cbExtra"]'),
    buttonConsultarPedido: () => cy.get('button[id="btPesquisar"]'),
    iconDownloadPedido: () => cy.get('img[src="~/IconDownload.png"]'),
    iconImprimirPedido: () => cy.get('img[src="~/IconPrint.png"]'),
    comboDataPedido: () => cy.get('select[id="select_data"]'),
    verDetalhesPedido: () => cy.get('td a[href*="pedidos/detalhespedido"]'),
    xRemoverItem: () => cy.get('span[class="remover"]'),
    accordionVerMenos: () => cy.get('[class="via-accordion-header"][aria-expanded="true"]'),
    setaMostrar: () => cy.get('#via-seta'),
    buttonSolicitarAtendimento: () => cy.get('button[title="Solicitar atendimento"]'),
    comboTipoAtendimento: () => cy.get('select[id="via-canal-atendimento"]'),
    comboMotivoAtendimento: () => cy.get('select[id="via-motivo"]'),
    comboTipoInformacao: () => cy.get('select#via-tipoSolicitacao'),
    comboDetalheInformacao: () => cy.get('select[id="via-detalhe"]'),
    comboSolucaoAberturaPortal: () => cy.get('select[id="via-solucao"]'),
    qtdItensAtendimento: () => cy.get('#via-qtd'),
    descricaoAtendimento: () => cy.get('#via-descricao'),
    buttonAberturaAtendimento: () => cy.get('#btn_atendimento'),
    codigoItemNaTela: () => cy.get('div[id="via_infoItem"]'),
  };

  openScreenConsultaPedidos() {
    this.elements.closeIconContainer().click();
    this.elements.menuHamburger().click();
    this.elements.menuConsultaPedidos().click();
  }

  selectTipoConsultaPedidoVia() {
    this.elements.comboTipoConsulta().select('Pedido Via').should('have.value', 'Pedido Via');
  }

  selectTipoConsultaPedidoParceiro() {
    this.elements.comboTipoConsulta().select('Pedido Parceiro').should('have.value', 'Pedido Parceiro');
  }

  selectTipoConsultaCPFCNPJ() {
    this.elements.comboTipoConsulta().select('CPF / CNPJ').should('have.value', 'CPFCNPJ');
  }

  selectDataPedido30Dias() {
    this.elements.comboDataPedido().select('Últimos 30 Dias').should('be.visible');
  }

  selectDataPedido15Dias() {
    this.elements.comboDataPedido().select('Últimos 15 Dias').should('be.visible');
  }

  selectDataPedido07Dias() {
    this.elements.comboDataPedido().select('Últimos 7 Dias').should('be.visible');
  }

  insertPedidoViaValido() {
    cy.getMassaByEnv().then((massa) => {
      this.elements.fieldIdPedidoVia().clear();
      this.elements.fieldIdPedidoVia().type(massa.casasbahia.idPedidoVia);
    });
  }

  insertMultiplosPedidosVia() {
    cy.getMassaByEnv().then((massa) => {
      this.elements.fieldIdPedidoVia().clear();
      this.elements.fieldIdPedidoVia().type(massa.casasbahia.idPedidoVia);
      this.elements.fieldIdPedidoVia().type(massa.casasbahia.idPedidoVia1);
      this.elements.fieldIdPedidoVia().type(massa.casasbahia.idPedidoVia2);
      this.elements.fieldIdPedidoVia().type(massa.casasbahia.idPedidoVia3);
    });
  }

  insertPedidoParceiroValido() {
    cy.getMassaByEnv().then((massa) => {
      this.elements.fieldIdPedidoParceiro().clear();
      this.elements.fieldIdPedidoParceiro().type(massa.casasbahia.idPedidoParceiro);
    });
  }

  insertPedidoCPFValido() {
    cy.getMassaByEnv().then((massa) => {
      this.elements.fieldIdCPFCNPJ().clear();
      this.elements.fieldIdCPFCNPJ().type(massa.casasbahia.CPF);
    });
  }

  insertPedidoCNPJValido() {
    cy.getMassaByEnv().then((massa) => {
      this.elements.fieldIdCPFCNPJ().clear();
      this.elements.fieldIdCPFCNPJ().type(massa.casasbahia.CNPJ);
    });
  }

  checkBandeiraCasasBahia() {
    this.elements.checkBandeiraCasasBahia()
      .should('exist')
      .should('be.visible')
      .check();
  }

  checkBandeiraPontoFrio() {
    this.elements.checkBandeiraPontoFrio()
      .should('exist')
      .should('be.visible')
      .check();
  }

  checkBandeiraExtra() {
    this.elements.checkBandeiraExtra()
      .should('exist')
      .should('be.visible')
      .check();
  }

  buttonConsultarPedido() {
    this.elements.buttonConsultarPedido()
      .click();
  }

  mostrarDetalhesPedidos() {
    this.elements.verDetalhesPedido()
      .should('exist')
      .should('be.visible')
      .click();
  }

  verMenosDetalhesPedidos() {
    this.elements.accordionVerMenos()
      .should('exist')
      .should('be.visible')
      .click();
  }

  mostrarDetalhesEntrega() {
    this.elements.setaMostrar()
      .should('exist')
      .should('be.visible')
      .click();
  }

  solicitarAtendimentoPedido() {
    this.elements.buttonSolicitarAtendimento()
      .should('exist')
      .should('be.visible')
      .click();
  }

  selecionarAtendimentoReativo() {
    this.elements.comboTipoAtendimento()
      .should('exist')
      .should('be.visible')
      .select('Reativo')
      .should('have.value', 0);
  }

  selecionarAtendimentoOuvidoria() {
    this.elements.comboTipoAtendimento()
      .should('exist')
      .should('be.visible')
      .select('Ouvidoria')
      .should('have.value', 1);
  }

  selecionarMotivoAtendimentoInformacao() {
    this.elements.comboMotivoAtendimento()
      .should('exist')
      .should('be.visible')
      .select('Informação')
      .should('have.value', 1048);
  }

  selecionarMotivoAtendimentoReclamacao() {
    this.elements.comboMotivoAtendimento()
      .should('exist')
      .should('be.visible')
      .select('Reclamação')
      .should('have.value', 1050);
  }

  selecionarMotivoAtendimentoOldProd() {
    this.elements.comboMotivoAtendimento()
      .should('exist')
      .should('be.visible')
      .select('OLD-PROD')
      .should('have.value', 3958);
  }

  selecionarMotivoAtendimentoSolicitação() {
    this.elements.comboMotivoAtendimento()
      .should('exist')
      .should('be.visible')
      .select('Solicitação')
      .should('have.value', 1051);
  }

  selecionarTipoInformacaoOfertas() {
    this.elements.comboTipoInformacao()
      .should('exist')
      .should('be.visible')
      .select('Ofertas')
      .should('have.value', 1060);
  }

  selecionarTipoEntrega() {
    this.elements.comboTipoInformacao()
      .find('option[value="1066"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }
  selecionarTipoFinanceiro(){
    this.elements.comboTipoInformacao()
      .find('option[value="1069"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }
  selecionarTipoListaDePresentes(){
    this.elements.comboTipoInformacao()
      .find('option[value="1071"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }

  selecionarTipoReversaColeta(){
    this.elements.comboTipoInformacao()
      .find('option[value="1081"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }

  selecionarTipoCorporativo(){
    this.elements.comboTipoInformacao()
      .find('option[value="1063"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }
  selecionarTipoTrocaouCancelamento(){
    this.elements.comboTipoInformacao()
      .find('option[value="4317"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }
  selecionarTipoAplicativo(){
    this.elements.comboTipoInformacao()
      .find('option[value="2601"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }
  selecionarTipoNotaFiscal(){
    this.elements.comboTipoInformacao()
      .find('option[value="1075"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }
  selecionarTipoServicoseSeguros(){
    this.elements.comboTipoInformacao()
      .find('option[value="3518"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }
  selecionarTipoAnalisedeCreditoFraude(){
    this.elements.comboTipoInformacao()
      .find('option[value="3585"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }
  selecionarTipoPrivacidade(){
    this.elements.comboTipoInformacao()
      .find('option[value="3784"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }
  selecionarTipoPromocao(){
    this.elements.comboTipoInformacao()
      .find('option[value="3791"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }
  selecionarTipoPix(){
    this.elements.comboTipoInformacao()
      .find('option[value="3922"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }

  selecionarTipoCarneDigital(){
    this.elements.comboTipoInformacao()
      .find('option[value="3925"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }

  selecionarTipoSite(){
    this.elements.comboTipoInformacao()
      .find('option[value="3976"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }

  selecionarTipoAtendimento(){
    this.elements.comboTipoInformacao()
      .find('option[value="3433"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }

  selecionarDetalheOfertasTV() {
    this.elements.comboDetalheInformacao()
      .should('exist')
      .should('be.visible')
      .select('Anúncio de TV válido para site')
      .should('have.value', 1148);
  }

  selecionarDuvidasOfertasCampanhasProdutos() {
    this.elements.comboDetalheInformacao()
      .should('exist')
      .should('be.visible')
      .select('Dúvidas sobre ofertas campanhas e produtos')
      .should('have.value', 1149);
  }

  selecionarHotSiteDaCampanha() {
    this.elements.comboDetalheInformacao()
      .find('option[value="3284"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }

  selecionarSolucaoAberturaPortal() {
    this.elements.comboSolucaoAberturaPortal()
      .should('exist')
      .should('be.visible')
      .select('Abertura via Portal Parceiro')
      .should('have.value', 4332);
  }
  selecionarPeriododeComprasCadastroValido() {
    this.elements.comboDetalheInformacao()
      .should('exist')
      .should('be.visible')
      .select('Período de compras ou cadastro válido')
      .should('have.value', 1153);
  }
  selecionarRegrasdeCampanha() {
    this.elements.comboDetalheInformacao()
      .find('option[value="1155"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }
  selecionarContatocomCanalExclusivo() {
    this.elements.comboDetalheInformacao()
      .find('option[value="3283"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }
  selecionarAlterarFilialRetirada() {
    this.elements.comboDetalheInformacao()
      .find('option[value="1237"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }
  selecionarConsultaroPedido() {
    this.elements.comboDetalheInformacao()
      .find('option[value="1241"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }
  selecionarIndisponibilidadeEstoque() {
    this.elements.comboDetalheInformacao()
      .find('option[value="1247"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }
  selecionarPrazoProcedimentoRetirar() {
    this.elements.comboDetalheInformacao()
      .find('option[value="2648"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }
  selecionarInformacoesSobreEntrega() {
    this.elements.comboDetalheInformacao()
      .find('option[value="3587"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }
  selecionarCodigoRastreio() {
    this.elements.comboDetalheInformacao()
      .find('option[value="4108"]')
      .then(($option) => {
        $option[0].selected = true;
      });
  }

  informarQtdItensAtendimento() {
    this.elements.qtdItensAtendimento()
      .should('exist')
      .should('be.visible')
      .type(1);
  }

  informarDescricaoDoAtendimento() {
    this.elements.descricaoAtendimento()
      .should('exist')
      .should('be.visible')
      .type('Automação de Testes - Falta Concatenar os valores do combo');
  }

  clickAbrirAtendimento() {
    this.elements.codigoItemNaTela().click();

    this.elements.buttonAberturaAtendimento()
      .should('exist')
      .should('be.visible')
      .click();
  }

  // realizarAberturaAtendimentoEntrega() {
  //   // eslint-disable-next-line no-undef
  //   verMenosDetalhesPedidos();
  //   // eslint-disable-next-line no-undef
  //   mostrarDetalhesEntrega();
  //   // eslint-disable-next-line no-undef
  //   solicitarAtendimentoPedido();
  //   // eslint-disable-next-line no-undef
  //   selecionarAtendimentoReativo();
  // }

  validationOpenScreenConsultaPedidos() {
    cy.get('h1').should('have.text', 'Pedidos');
  }
}

export default new ConsultaPedidosPage();
