<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Set the recipient email address.
    $to = 'info@rose-long.com';
    $headers = 'From: ' . $email;

    // Mail function to send the email.
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
} else {
    http_response_code(405);
    echo 'Method not allowed';
}
?>
