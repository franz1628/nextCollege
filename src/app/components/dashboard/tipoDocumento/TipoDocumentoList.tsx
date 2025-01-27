import Button from "@/components/ui/Button";
import Table from "@/components/ui/Table";
import Tbody from "@/components/ui/Tbody";
import Td from "@/components/ui/Td";
import Th from "@/components/ui/Th";
import Thead from "@/components/ui/Thead";
import Tr from "@/components/ui/Tr";
import { TipoDocumentoModel } from "@/types/TipoDocumentoModel";
import formatDate from "@/utils/formatDate";
import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid";

interface Props{
    models:TipoDocumentoModel[]
    handleEditar:(x:TipoDocumentoModel) => {}
    handleEliminar:(x:TipoDocumentoModel) => {}
}

const TipoDocumentoList:React.FC<Props> = ({models,handleEditar,handleEliminar}) => {
    return <Table>
        <Thead>
            <Tr>
                <Th>Id</Th>
                <Th>Descripcion</Th>
                <Th>Estado</Th>
                <Th>Creacion</Th>
                <Th>Modificacion</Th>
                <Th>Acciones</Th>
            </Tr>
        </Thead>

        <Tbody>
            {
                models.map(x=>{
                    return <Tr key={x.id}>
                        <Td>{x.id}</Td>
                        <Td>{x.descripcion}</Td>
                        <Td>
                          {
                          x.estado
                          ? <span className="bg-green-500 text-white p-1 rounded-md">ACTIVO</span>
                          :<span className="bg-red-500  text-white p-1 rounded-md">INACTIVO</span>
                          }</Td>
                        <Td>{formatDate(x.created_at)}</Td>
                        <Td>{formatDate(x.updated_at)}</Td>
                        <Td>
                        <div className="flex items-center">
                          <Button color="sky" onClick={() => handleEditar(x)}>
                            <PencilIcon className="h-4 w-4" />
                            Editar
                          </Button>
                          <Button color="red" onClick={()=> handleEliminar(x)}>
                            <TrashIcon className="h-4 w-4" />
                            Eliminar
                          </Button>
                        </div>
                        </Td>
                    </Tr>
                })
            }
        </Tbody>
    </Table>

}

export default TipoDocumentoList;