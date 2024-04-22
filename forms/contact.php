<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Configurações de e-mail
    $to = 'amanda.joioso@gmail.com'; // Coloque aqui o seu endereço de e-mail
    $from = $_POST['email'];
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    // Cabeçalhos de e-mail
    $headers = "From: $name <$from>" . "\r\n";
    $headers .= "Reply-To: $from" . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
    
    // Corpo do e-mail
    $body = "Você recebeu uma nova mensagem do formulário de contato do seu site:<br><br>";
    $body .= "<strong>Nome:</strong> $name<br>";
    $body .= "<strong>Email:</strong> $from<br>";
    $body .= "<strong>Assunto:</strong> $subject<br>";
    $body .= "<strong>Mensagem:</strong><br>$message<br>";
    
    // Enviar e-mail
    if (mail($to, $subject, $body, $headers)) {
        // Se o e-mail for enviado com sucesso
        echo json_encode(array('status' => 'success', 'message' => 'Your message has been sent. Thank you!'));
    } else {
        // Se houver um erro ao enviar o e-mail
        echo json_encode(array('status' => 'error', 'message' => 'Failed to send message. Please try again later.'));
    }
} else {
    // Se o arquivo PHP for acessado diretamente
    echo json_encode(array('status' => 'error', 'message' => 'Direct access not allowed.'));
}
?>
