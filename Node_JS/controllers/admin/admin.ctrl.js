const models = require('../../models');

exports.get_products = async ( _ , res) => {

    try{
        const products = await models.Products.findAll();
        res.render('admin/products.html', { productList : products });
    } catch(e) {

    }

    // res.render( 'admin/products.html' , 
    //     { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    // );
    // models.Products.findAll({

    // }).then( (productList) => {
    //     res.render('admin/products.html', 
    //         { productList : productList }
    //     );
    // });
}

exports.get_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_products_write = async ( req , res ) => {
    
    await models.Products.create(req.body);
    res.redirect('/admin/products');

    // models.Products.create(req.body).then( () => {
    //     res.redirect('/admin/products');
    // });
}

exports.get_products_detail = ( req , res ) => {
    models.Products.findByPk(req.params.id).then( (product) => {
        res.render('admin/detail.html', { product: product });  
    });
}; 

exports.get_products_edit = ( req , res ) => {
    models.Products.findByPk(req.params.id).then( (product) => {
        res.render('admin/write.html', { product: product });  
    });
};

exports.post_products_edit = async ( req, res ) => {
    await models.Products.update(
        {
            name : req.body.name,
            prive : req.body.price,
            description : req.body.description
        },
        {
            where : { id : req.params.id }
        }
    );
    res.redirect('/admin/products/detail/' + req.params.id);

    // models.Products.update(
    //     {
    //         name : req.body.name,
    //         prive : req.body.price,
    //         description : req.body.description
    //     },
    //     {
    //         where : { id : req.params.id }
    //     }
    // ).then( () => {
    //     res.redirect('/admin/products/detail/' + req.params.id);
    // });
}

exports.get_products_delete = ( req, res ) => {
    models.Products.destroy({
        where : {
            id : req.params.id
        }
    }).then( () => {
        res.redirect('/admin/products')
    });
};