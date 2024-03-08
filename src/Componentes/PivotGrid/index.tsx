import React from 'react';

import PivotGrid, { FieldChooser, FieldPanel, } from 'devextreme-react/pivot-grid';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

import { sales } from './data';
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

   return (
      <>
         <div className="long-title mt-5">
            <h3>Valores por Região</h3>
         </div>
         <PivotGrid
            dataSource={ConfiguracaoInicial}
            // allowSortingBySummary={true}
            // allowSorting={true}
            // allowFiltering={true}
            // allowExpandAll={true}
            height={400}
            showBorders={true}
            showRowGrandTotals={true}
            // showColumnTotals={true}
            showColumnGrandTotals={true}
         >
            {/* <FieldChooser enabled={false} /> Retira o configurador do pivot grid */}
            {/* <FieldChooser
               enabled={true}
               allowSearch={true}
            /> */}

            <FieldPanel
               showColumnFields={true}
               showDataFields={false}
               showFilterFields={false}
               showRowFields={false}
               allowFieldDragging={true}
               visible={true}
            />
            <FieldChooser height={500} />
         </PivotGrid>
      </>
   )
};

const dataSource = new PivotGridDataSource({
   fields: [
      {
         caption: 'Region',
         width: 120,
         dataField: 'region',
         area: 'row',
      },
      {
         caption: 'City',
         dataField: 'city',
         width: 150,
         area: 'row',
         selector(data: any) {
            return `${data.city} (${data.country})`;
         },
      },
      {
         dataField: 'date',
         dataType: 'date',
         area: 'column',
      },
      {
         caption: 'Sales',
         dataField: 'amount',
         dataType: 'number',
         summaryType: 'sum',
         format: 'currency',
         area: 'data',
      }
   ],
   store: sales,
});