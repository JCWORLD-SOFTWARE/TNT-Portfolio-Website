<?php

	header("Access-Control-Allow-Origin: *");

	$response = array(
		'status' => 0,
		'message' => "Invalid request"
	);


	if (isset($_POST['email'])) {
		$fullname = trim($_POST['name']);
		$cli_email = trim($_POST['email']);
		$to = "officialteenetwork@gmail.com";
		$subject = trim($_POST['subject']);
		$phone = trim($_POST['phone_no']);
		$body = trim($_POST['message']);

		// Create email headers
		//Set content-type for sending HTML email
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

		//Additional headers
		$headers .= '<From: teenetworktech@gmail.com>'."\r\n";
		$headers .= '<Cc: '.$to . ">\r\n";


		@$message .= '<div style="font-family:HelveticaNeue-Light,Arial,sans-serif;background-color:#eeeeee">';

		$message .= '<table align="center" width="100%" border="1" cellspacing="0" cellpadding="0" bgcolor="#eeeeee">';
		$message .= '<tbody>';
		$message .= '<tr><td colspan="2" height="20">A Request for a Quote</td></tr>';
		$message .= '<tr>';
		$message .= '<td align="left">Full Name</td>';
		$message .= '<td>'.$fullname.'</td>';
		$message .= '</tr>';
		$message .= '<tr>';
		$message .= '<td align="left">Email Address</td>';
		$message .= '<td>'.$cli_email.'</td>';
		$message .= '</tr>';
		$message .= '<tr>';
		$message .= '<td align="left">Phone/Skype no</td>';
		$message .= '<td>'.$phone.'</td>';
		$message .= '</tr>';
		$message .= '<tr>';
		$message .= '<td align="left">Message</td>';
		$message .= '<td>'.$body.'</td>';
		$message .= '</tr>';
		$message .= '</tbody>';
		$message .= '</table>';
		$message .= '</div>';


		if (mail($to, $subject, $message,$headers)) {
			$response['status'] = 1;
			$response['message'] = "Thank you for contacting us! We will get back to you within 24hours.";
		} else {
			$response['status'] = 0;
			$response['message'] = "Error sending message. Please try again";
		}
		
		echo json_encode($response);	
	}else {
		echo json_encode($response);
	}
	




?>