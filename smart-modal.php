<?php
/**
 * Plugin Name: Smart Modal
 * Description: You can quickly display the title and content in a customizable popup modal by using the Smart Modal plugin.
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: smart-modal
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }


class BPSMB_Smart_Modal {
	public static $instance;

	private function __construct()
	{
		$this->load_classes();
		$this->defined_constants();

		add_action( 'init', [ $this, 'onInit' ] );
	}

	public static function get_instance(){
		if(self::$instance){
			return self::$instance;
		}

		self::$instance = new self();
		return self::$instance;
	}
	
	public function defined_constants() {
		define( 'BPSMB_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
		define( 'BPSMB_DIR_URL', plugin_dir_url( __FILE__ ) );
		define( 'BPSMB_DIR_PATH', plugin_dir_path( __FILE__ ) );
	}

	public function load_classes() { }

	public function onInit(){
		register_block_type( __DIR__ . '/build' );
	}
}
BPSMB_Smart_Modal::get_instance();
