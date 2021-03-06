/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { InspectorControls, PlainText } from '@wordpress/editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { withInstanceId } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import './editor.scss';
import './style.scss';

/**
 * Component displaying a product search form.
 */
const Edit = ( {
	attributes: { label, placeholder, formId, className, hasLabel, align },
	instanceId,
	setAttributes,
} ) => {
	const classes = classnames(
		'wc-block-product-search',
		align ? 'align' + align : '',
		className
	);

	if ( ! formId ) {
		setAttributes( {
			formId: `wc-block-product-search-${ instanceId }`,
		} );
	}

	return (
		<>
			<InspectorControls key="inspector">
				<PanelBody
					title={ __( 'Content', 'woo-gutenberg-products-block' ) }
					initialOpen
				>
					<ToggleControl
						label={ __(
							'Show search field label',
							'woo-gutenberg-products-block'
						) }
						help={
							hasLabel
								? __(
										'Label is visible.',
										'woo-gutenberg-products-block'
								  )
								: __(
										'Label is hidden.',
										'woo-gutenberg-products-block'
								  )
						}
						checked={ hasLabel }
						onChange={ () =>
							setAttributes( { hasLabel: ! hasLabel } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div className={ classes }>
				{ !! hasLabel && (
					<PlainText
						className="wc-block-product-search__label"
						value={ label }
						onChange={ ( value ) =>
							setAttributes( { label: value } )
						}
					/>
				) }
				<div className="wc-block-product-search__fields">
					<PlainText
						className="wc-block-product-search__field input-control"
						value={ placeholder }
						onChange={ ( value ) =>
							setAttributes( { placeholder: value } )
						}
					/>
					<button
						type="submit"
						className="wc-block-product-search__button"
						label={ __( 'Search', 'woo-gutenberg-products-block' ) }
						onClick={ ( e ) => e.preventDefault() }
						tabIndex="-1"
					>
						<svg
							aria-hidden="true"
							role="img"
							focusable="false"
							className="dashicon dashicons-arrow-right-alt2"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 20 20"
						>
							<path d="M6 15l5-5-5-5 1-2 7 7-7 7z" />
						</svg>
					</button>
				</div>
			</div>
		</>
	);
};

Edit.propTypes = {
	/**
	 * The attributes for this block.
	 */
	attributes: PropTypes.object.isRequired,
	/**
	 * A unique ID for identifying the label for the select dropdown.
	 */
	instanceId: PropTypes.number,
	/**
	 * Whether it's in the editor or frontend display.
	 */
	isEditor: PropTypes.bool,
	/**
	 * A callback to update attributes.
	 */
	setAttributes: PropTypes.func,
};

export default withInstanceId( Edit );
