# Elementor Form DataLayer Integration

Este script captura dados de campos de formulários do Elementor e os envia para o `dataLayer`, permitindo uma integração com o Google Tag Manager.

## Instalação

1. Adicione o código do arquivo `form-datalayer.js` no Elementor em **Configurações > Código Personalizado**.
2. No código, substitua `"URL_DA_PAGINA_DE_CONFIRMACAO"` com a URL de confirmação desejada após a submissão do formulário esta opção é opcional.

## Funcionalidades

- Envia dados de todos os campos de formulário para o `dataLayer`.
- Inclui o nome e o ID do formulário, além da URL de redirecionamento.
- É compatível com o evento `submit_success` do Elementor para redirecionamento.

## Exemplo de DataLayer Output

```javascript
dataLayer.push({
    'event': 'form_submit',
    'form_name': 'frm lp 01',
    'form_id': 'frm_lp_01',
    'form_data': {
        'nome': 'Exemplo',
        'email': 'exemplo@dominio.com'
    },
    'form_destination': 'https://www.example.com/confirmation'
});
