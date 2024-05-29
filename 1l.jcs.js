app.get('/', async (req, res) => {
    const searchQuery = req.query.search || '';
    const wallpapers = await Wallpaper.find({
        $or: [
            { title: new RegExp(searchQuery, 'i') },
            { category: new RegExp(searchQuery, 'i') }
        ]
    });
    res.render('index', { wallpapers: wallpapers });
});
