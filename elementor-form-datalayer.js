// form-datalayer.js
jQuery(document).ready(function($) {
    // Intercepta o evento de submissão do formulário antes de 'submit_success'
    // Intercept form submission event before 'submit_success'

    $(document).on('submit', '.elementor-form', function(evt) {
        let formData = {};
        
        // Captura o formulário atual e seus dados
        // Captures the current form and its data

        const form = $(this);
        const formID = form.attr('id') || 'ID_DO_FORMULÁRIO_AQUI | FORM_ID_HERE';
        const formName = form.data('form-name') || 'NOME_DO_FORMULÁRIO_AQUI | FORM_NAME_HERE';

        // Coleta os valores dos campos antes da submissão
        // Collects field values ​​before submission

        form.find('input, textarea, select').each(function() {
            const fieldName = $(this).attr('name');
            const fieldValue = $(this).val();
            if (fieldName && fieldValue) {
                formData[fieldName] = fieldValue;
            }
        });

        // Envia os dados para o dataLayer
        // Sends data to the dataLayer

        dataLayer.push({
            'event': 'form_submit',
            'form_name': formName,
            'form_id': formID,
            'form_data': formData,  // Campos e valores do formulário
            'form_destination': form.attr('action')
        });
    });

    // Evento de redirecionamento após o envio bem-sucedido *** OPCIONAL ***
    // Redirect event after successful submission ***OPTIONAL***

    /*
    $(document).on('submit_success', function() {
        window.location.href = "URL_DA_PAGINA_DE_CONFIRMACAO/URL_OF_PAGE_CONFIRMATION";
    });

    */
});
