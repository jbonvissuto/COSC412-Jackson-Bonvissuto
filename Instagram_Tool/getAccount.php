<?php
use Phpfastcache\Helper\Psr16Adapter;
require __DIR__ . '/scraper/vendor/autoload.php';

// If account is public you can query Instagram without auth
$username = $_POST['username'];
$password = $_POST['password'];
$instagram = \InstagramScraper\Instagram::withCredentials(new \GuzzleHttp\Client(), $username, $password, new Psr16Adapter('Files'));
$instagram->login();
$instagram->saveSession();
sleep(2); // Delay to mimic user

// For getting information about account you don't need to auth:

$account = $instagram->getAccount('batmanthepic');

// Available fields
echo "Account info:\n";
echo "Id: {$account->getId()}\n";
echo "Username: {$account->getUsername()}\n";
echo "Full name: {$account->getFullName()}\n";
echo "Biography: {$account->getBiography()}\n";
echo "Profile picture url: {$account->getProfilePicUrl()}\n";
echo "External link: {$account->getExternalUrl()}\n";
echo "Number of published posts: {$account->getMediaCount()}\n";
echo "Number of followers: {$account->getFollowsCount()}\n";
echo "Number of follows: {$account->getFollowedByCount()}\n";
echo "Is private: {$account->isPrivate()}\n";
echo "Is verified: {$account->isVerified()}\n";

$response_array['status'] = 'success'; 
echo json_encode($response_array);