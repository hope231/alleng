<?php
	
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	$mail->setFrom('lopteva.99@mail.ru', 'hope');

	$mail->addAddress('hopeqrtx@gmail.com');

	$mail->subject = 'привет';

	$body = '<h1>халоу,</h1>';
	if (trin(!empty($_POST['email']))) {
		$body.='<p><strong>E-mail:</strong>'.$_POST['email'].'</p>';
	}

	if (trin(!empty($_POST['email']))) {
		$body.='<p><strong>сообщение:</strong>'.$_POST['message'].'</p>';
	}

	$mail->Body = $body;

	if (!$mail->send()) {
		$message = 'ошибка';
	}else {
		$message = 'данные отправлены';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);