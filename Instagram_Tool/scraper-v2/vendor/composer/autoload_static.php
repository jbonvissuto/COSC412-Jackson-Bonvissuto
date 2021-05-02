<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd8c559ec1d98d0d04a75941d13e02d5b
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'Psr\\SimpleCache\\' => 16,
        ),
        'I' => 
        array (
            'InstagramScraper\\' => 17,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Psr\\SimpleCache\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/simple-cache/src',
        ),
        'InstagramScraper\\' => 
        array (
            0 => __DIR__ . '/..' . '/restyler/instagram-php-scraper/src/InstagramScraper',
        ),
    );

    public static $prefixesPsr0 = array (
        'U' => 
        array (
            'Unirest\\' => 
            array (
                0 => __DIR__ . '/..' . '/mashape/unirest-php/src',
            ),
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd8c559ec1d98d0d04a75941d13e02d5b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd8c559ec1d98d0d04a75941d13e02d5b::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInitd8c559ec1d98d0d04a75941d13e02d5b::$prefixesPsr0;
            $loader->classMap = ComposerStaticInitd8c559ec1d98d0d04a75941d13e02d5b::$classMap;

        }, null, ClassLoader::class);
    }
}
