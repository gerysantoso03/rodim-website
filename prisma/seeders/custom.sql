do $$
declare
    pr record;
    cr record;
begin
    for pr in (
        select p.*
        from products p
        where p.status = 1
    ) loop
        for cr in (
            select
                c.id,
                c.code
            from categories c
            where
                c.status = 1
            order by c.id
        ) loop
            insert into product_categories
            (
                product_id,
                category_id,
                value_1,
                value_2
            )
            values
            (
                pr.id,
                cr.id,
                'N/A',
                'N/A'
            );
        end loop;
    end loop;
end $$;


insert into products
(
    code,
    thickness,
    gloss,
    quv,
    warranty
)
values
('RODIM R1', '≥ 7.0 mil', '≥ 93', '≥ 2400 jam', '7 Tahun'),
('RODIM R2 Matte', '≥ 7.5 mil', '20 ± 2', '≥ 2800 jam', '10 Tahun'),
('RODIM R2 Pro', '≥ 7.5 mil', '≥ 93', '≥ 2800 jam', '10 Tahun'),
('RODIM R3 Pro', '≥ 8.5 mil', '≥ 93', '≥ 3200 jam', '10 Tahun'),
('RODIM R4 Pro', '≥ 9.5 mil', '≥ 93', '≥ 3200 jam', '10 Tahun');