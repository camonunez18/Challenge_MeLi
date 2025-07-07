import React from 'react';

const SellerBlock = ({ sellerInfo }) => {
    if (!sellerInfo) return null;

    return (
        <div className="seller-info-block text-center pb-3 mb-3 border-bottom">
            {sellerInfo.logoUrl && (
                <img
                    src={sellerInfo.logoUrl}
                    alt={sellerInfo.name || "Logo del Vendedor"}
                    className="seller-logo rounded-circle mb-2"
                    // ELIMINAMOS los estilos en línea aquí, confiaremos en el CSS externo
                    // style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/cccccc/000000?text=Logo'; }}
                />
            )}
            <p className="seller-name text-primary mb-1">{sellerInfo.name}</p>
            <p className="seller-reputation text-muted">{sellerInfo.reputation || 'Tienda Oficial'}</p>
        </div>
    );
};

export default SellerBlock;
