import React from 'react';

const SellerBlock = ({ sellerInfo }) => {
    if (!sellerInfo) return null;

    return (
        <div className="seller-info-block text-center pb-3 mb-3 border-bottom">
            {sellerInfo.logoUrl && (
                <img src={sellerInfo.logoUrl} alt={sellerInfo.name} className="seller-logo rounded-circle mb-2" />
            )}
            <p className="seller-name text-primary mb-1">{sellerInfo.name}</p>
            <p className="seller-reputation text-muted">{sellerInfo.reputation || 'Tienda Oficial'}</p>
        </div>
    );
};

export default SellerBlock;