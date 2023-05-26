import pedidos from '../Pages/consultaPedidosPage';
import validation from '../Validation/consultaPedidoValidation';

context('Testar e Validar a Consulta de Pedidos das Casas Bahia', () => {
  describe('Testar e Validar a Consulta de Pedidos', () => {
    it('Deve realizar a consulta de um Pedido Via', () => {
      // Recuperar o Token na sessão após realizar o Login
      // Realizar um get - token e verificar se recupera  (https://app-portalparceiro-b2b-hlg.via.com.br/_services/auth/token)
      // cy.loginSession();
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
    });
    it('Deve realizar a consulta de um Pedido Parceiro', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoParceiro();
      pedidos.insertPedidoParceiroValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
    });
    it('Deve realizar a consulta de um Pedido por CPF nos últimos 30 dias', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaCPFCNPJ();
      pedidos.insertPedidoCPFValido();
      pedidos.selectDataPedido30Dias();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
    });
    it('Deve realizar a consulta de mais de um pedido', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertMultiplosPedidosVia();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationMultiplosPedidos();
    });
    // Aqui inicia o atendimento //
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Ofertas][Anuncio de TV Válido para Site][Abertura via portal parceiro]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoInformacaoOfertas();
      pedidos.selecionarDetalheOfertasTV();
      pedidos.selecionarSolucaoAberturaPortal();
      pedidos.informarDescricaoDoAtendimento();
      pedidos.clickAbrirAtendimento();
      validation.validationAtendimentoRealizado();
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Ofertas][Duvidas sobre ofertas campanhas e produtos][Abertura via portal parceiro]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoInformacaoOfertas();
      pedidos.selecionarDuvidasOfertasCampanhasProdutos();
      pedidos.selecionarSolucaoAberturaPortal();
      pedidos.informarDescricaoDoAtendimento();
      pedidos.clickAbrirAtendimento();
      validation.validationAtendimentoRealizado();
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Ofertas][Hotsite da Campanha][Abertura via portal parceiro]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoInformacaoOfertas();
      pedidos.selecionarHotSiteDaCampanha();
      pedidos.selecionarSolucaoAberturaPortal();
      pedidos.informarDescricaoDoAtendimento();
      pedidos.clickAbrirAtendimento();
      validation.validationAtendimentoRealizado();
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Ofertas][Periodo de compras ou cadastro valido][Abertura via portal parceiro]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoInformacaoOfertas();
      pedidos.selecionarPeriododeComprasCadastroValido();
      pedidos.selecionarSolucaoAberturaPortal();
      pedidos.informarDescricaoDoAtendimento();
      pedidos.clickAbrirAtendimento();
      validation.validationAtendimentoRealizado();
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Ofertas][Regras de campanha, data sorteio e premio][Abertura via portal parceiro]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoInformacaoOfertas();
      pedidos.selecionarRegrasdeCampanha();
      pedidos.selecionarSolucaoAberturaPortal();
      pedidos.informarDescricaoDoAtendimento();
      pedidos.clickAbrirAtendimento();
      validation.validationAtendimentoRealizado();
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Ofertas][Contato com canal exclusivo]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoInformacaoOfertas();
      pedidos.selecionarContatocomCanalExclusivo();
      //INCOMPLETO- FALTA PREENCHIMENTOS 
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Ofertas][Prazo de duração de oferta ou campanha]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoInformacaoOfertas();
      pedidos.selecionarPrazodeDuracaoOfertaCampanha();
      //INCOMPLETO- FALTA PREENCHIMENTOS 
    });
    // Aqui Inicia as ENTREGAS //
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Entrega][Valor de frete p/ Região]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoEntrega();
      pedidos.selecionarValorFreteRegiao();
      //INCOMPLETO- FALTA PREENCHIMENTOS 
      
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Entrega][Alterar Filial Retirada]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoEntrega();
      pedidos.selecionarAlterarFilialRetirada();
      //INCOMPLETO- FALTA PREENCHIMENTOS 
      
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Entrega][Consultar o pedido]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoEntrega();
      pedidos.selecionarConsultaroPedido();
      //INCOMPLETO- FALTA PREENCHIMENTOS 
      
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Entrega][Indisponibilidade de Estoque]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoEntrega();
      pedidos.selecionarIndisponibilidadeEstoque();
      //INCOMPLETO- FALTA PREENCHIMENTOS 
      
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Entrega][Prazo /Procedimento p/ retirar]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoEntrega();
      pedidos.selecionarPrazoProcedimentoRetirar();
      //INCOMPLETO- FALTA PREENCHIMENTOS 
      
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Entrega][Não Recebeu o email de confirmação]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoEntrega();
      pedidos.selecionarNaoRecebeuEmail() ;
      //INCOMPLETO- FALTA PREENCHIMENTOS 
      
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Entrega][Retirada de pedido por Terceiros]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoEntrega();
      pedidos.selecionarRetiradaPedidoTerceiros() ;
      //INCOMPLETO- FALTA PREENCHIMENTOS 
      
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Entrega][Procedimento p/ frete gratis]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoEntrega();
      pedidos.selecionarProcedimentoFreteGratis() ;
      //INCOMPLETO- FALTA PREENCHIMENTOS 
      
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Entrega][Informações Sobre a Entrega]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoEntrega();
      pedidos.selecionarInformacoesSobreEntrega() ;
      //INCOMPLETO- FALTA PREENCHIMENTOS 
      
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Entrega][Código Rastreio]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoEntrega();
      pedidos.selecionarCodigoRastreio() ;
      //INCOMPLETO- FALTA PREENCHIMENTOS 
      
    });
    // Inicio Financeiro // 
    
    it.only('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Financeiro]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoFinanceiro();
      //INCOMPLETO- FALTA PREENCHIMENTOS 
      
      
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Lista de Presentes]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoListaDePresentes();
      //INCOMPLETO- FALTA PREENCHIMENTOS 
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Reversa Coleta]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoReversaColeta();
      //INCOMPLETO- FALTA PREENCHIMENTOS 
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Corporativo]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoCorporativo();
      //INCOMPLETO- FALTA PREENCHIMENTOS 
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Troca ou Cancelamento]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoTrocaouCancelamento();
      //INCOMPLETO- FALTA PREENCHIMENTOS 
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Aplicativos]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoAplicativo();
      //INCOMPLETO- FALTA PREENCHIMENTOS 
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Nota Fiscal]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoNotaFiscal();
      //INCOMPLETO- FALTA PREENCHIMENTOS 
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Serviços e Seguros]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoServicoseSeguros();
      //INCOMPLETO- FALTA PREENCHIMENTOS 
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Analise de Crédito ou fraude]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoAnalisedeCreditoFraude();
      //INCOMPLETO- FALTA PREENCHIMENTOS 
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Privacidade]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoPrivacidade();
      //INCOMPLETO- FALTA PREENCHIMENTOS 
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Promoção]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoPromocao();
      //INCOMPLETO- FALTA PREENCHIMENTOS 
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][PIX]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoPix();

    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Carne Digital]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoCarneDigital();
      //INCOMPLETO- FALTA PREENCHIMENTOS 
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Site]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoSite();
      //INCOMPLETO- FALTA PREENCHIMENTOS 
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][Informação][Atendimento]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoInformacao();
      pedidos.selecionarTipoAtendimento();
      //INCOMPLETO- FALTA PREENCHIMENTOS 
    });
    //  AQUI INICIA RECLAMAÇÃO // 
    it('Deve realizar a abertura de atendimento do tipo [Reativo][//Reclamação][Ofertas]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoReclamacao();
      pedidos.selecionarTipoInformacaoOfertas();
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][//Reclamação][Entrega]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoReclamacao();
      pedidos.selecionarTipoEntrega();
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][//Reclamação][Financeiro]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoReclamacao();
      pedidos.selecionarTipoFinanceiro();
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][//Reclamação][Lista de Presentes]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoReclamacao();
      pedidos.selecionarTipoListaDePresentes();
    });
    it('Deve realizar a abertura de atendimento do tipo [Reativo][//Solicitação][Ofertas]', () => {
      pedidos.openScreenConsultaPedidos();
      pedidos.selectTipoConsultaPedidoVia();
      pedidos.insertPedidoViaValido();
      pedidos.checkBandeiraCasasBahia();
      pedidos.buttonConsultarPedido();
      validation.validationPedidoCarregado();
      pedidos.mostrarDetalhesPedidos();
      pedidos.verMenosDetalhesPedidos();
      pedidos.mostrarDetalhesEntrega();
      pedidos.solicitarAtendimentoPedido();
      pedidos.selecionarAtendimentoReativo();
      pedidos.selecionarMotivoAtendimentoSolicitação();
      pedidos.selecionarTipoInformacaoOfertas();
    });

  });
});
