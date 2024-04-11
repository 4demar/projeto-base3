import React, { useState } from 'react';

import PivotGrid, { FieldChooser, FieldPanel } from 'devextreme-react/pivot-grid';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

import { DadosPorRegiao } from './data';
import { dadosConsulta } from './dadosConsulta';

export const TabelaDinamica = () => {

   const ConfiguracaoInicial = new PivotGridDataSource({
      fields: [
         {
            dataField: 'Produto',
            area: 'row',
            width: 300,
         },
         {
            caption: 'Perdas(R$) (1º período)',
            dataField: 'PerdasAnterior',
            dataType: 'number',
            summaryType: 'sum',
            width: 50,
            area: 'data',
            format: {
               type: 'currency',
               currency: 'BRL',
               precision: 2,
            },
         },
         {
            caption: 'Qtde (pç) (1º período)',
            dataField: 'QuantidadeAnterior',
            summaryType: 'sum',
            dataType: 'number',
            width: 50,
            area: 'data',
         },
         {
            caption: 'Perdas(R$) (2º período)',
            dataField: 'Perdas',
            dataType: 'number',
            summaryType: 'sum',
            width: 50,
            area: 'data',
            format: {
               type: 'currency',
               currency: 'BRL',
               precision: 2,
            },
         },
         {
            caption: 'Qtde (pç) (2º período)',
            dataField: 'Quantidade',
            summaryType: 'sum',
            dataType: 'number',
            width: 50,
            area: 'data',
         },
         {
            caption: 'Comparação (Perdas R$)',
            dataField: 'ComparacaoValor',
            summaryType: 'sum',
            dataType: 'number',
            width: 100,
            area: 'data',
            format: {
               type: 'currency',
               currency: 'BRL',
               precision: 2,
            },
         },
         {
            caption: 'Comparação (Qtde - pç)',
            dataField: 'ComparacaoQuantidade',
            summaryType: 'sum',
            dataType: 'number',
            width: 100,
            area: 'data',
         },
         {
            dataField: 'Id',
            visible: false,

         },

         // {
         //   dataType: 'number',
         //   area: 'column',
         //   dataField: 'Produto',
         // },
      ],
      store: dadosConsulta,
   })

   const dataSource = new PivotGridDataSource({
      fields: [
         {
            dataField: 'Id',
            visible: false,
         },
         {
            caption: 'Regiao',
            dataField: 'Regiao',
            width: 120,
            area: 'row',
         },
         {
            caption: 'Data',
            dataField: 'Data',
            area: 'column',

         },
         // {
         //    caption: 'Valor',
         //    dataField: 'Valor',
         //    dataType: 'number',
         //    summaryType: 'sum',
         //    format: {
         //       type: 'currency',
         //       currency: 'BRL',
         //       precision: 2,
         //    },
         //    area: 'data',
         // }
      ],
      store: DadosPorRegiao,
   });

   return (
      <>
         <div className="long-title mt-5">
            <h3>Valores por Região</h3>
         </div>
         <PivotGrid
            dataSource={dataSource}
            allowSortingBySummary={false}
            allowSorting={false}
            allowFiltering={false}
            allowExpandAll={false}
            height={400}
            showBorders={true}
            showRowGrandTotals={false}
            showRowTotals={false}
            showColumnTotals={false}
            showColumnGrandTotals={false}
         >
            {/* <FieldChooser enabled={false} /> Retira o configurador do pivot grid */}
            {/* <FieldChooser
               enabled={true}
               allowSearch={true}
            /> */}

            <FieldPanel
               allowFieldDragging={true}
               visible={true}
            />
            <FieldChooser height={500} />
         </PivotGrid>
      </>
   )
};