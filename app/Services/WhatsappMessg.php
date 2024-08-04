<?php

namespace App\Services;

use Illuminate\Support\Facades\Log;

class WhatsappMessg
{

    public function __construct($phone, $message)
    {
        $this->phone = $phone;
        $this->message = $message;
    }
    public function send()
    {

        Log::info("Phone: " . $this->phone);

        $curl = curl_init();
        curl_setopt_array(
            $curl,
            array(
                CURLOPT_URL => 'https://api.fonnte.com/send',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'POST',
                CURLOPT_POSTFIELDS => array(
                    'target' => $this->phone,
                    'message' => $this->message,
                    'countryCode' => '62', //optional
                ),
                CURLOPT_HTTPHEADER => array(
                    'Authorization: Bxp@H#PJ+7eLYA2tW+Zb' //change TOKEN to your actual token
                ),
            )
        );

        $response = curl_exec($curl);

        curl_close($curl);

        return $response;

    }
}