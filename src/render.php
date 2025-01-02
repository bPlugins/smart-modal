<?php
$id = wp_unique_id( 'bpsmb_smart_modal_block-' );
?>
<div 
    <?php echo wp_kses_post( get_block_wrapper_attributes() ); ?> 
    id="<?php echo esc_attr( $id ); ?>" 
    data-attributes="<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>">
</div>
